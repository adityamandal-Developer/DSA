const debouncedSearch = useCallback(
    debounce((searchValue: string, currentFilters: typeof filters) => {
        const updatedFilters = { ...currentFilters, search: searchValue };
        dispatch(setFilters(updatedFilters));
        dispatch(
            fetchTasks({
                filters: updatedFilters,
                token: session?.accessToken || "",
            })
        );
    }, 1000),
    [dispatch, session?.accessToken]
);

const handleFilterChange = (key: string, value: string) => {
    setLocalFilters((prev) => ({
        ...prev,
        [key]: value,
    }));

    if (key === "search") {
        // Pass current filters to ensure we're using the latest state
        debouncedSearch(value, filters);
    } else {
        const apiValue = value === "ALL" ? undefined : value;
        const updatedFilters = { ...filters, [key]: apiValue };
        dispatch(setFilters(updatedFilters));
        dispatch(
            fetchTasks({
                filters: updatedFilters,
                token: session?.accessToken || "",
            })
        );
    }
};
const handleDateRangeChange = (dateRange: DateRange | undefined) => {
    setLocalFilters((prev) => ({
        ...prev,
        dateRange,
    }));

    const updatedFilters = {
        ...filters,
        dueDateAfter: dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : "",
        dueDateBefore: dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : "",
    };
    dispatch(setFilters(updatedFilters));
    dispatch(
        fetchTasks({ filters: updatedFilters, token: session?.accessToken || "" })
    );
};

useEffect(() => {
    return () => {
        debouncedSearch.cancel();
    };
}, [debouncedSearch]);

useEffect(() => {
    if (session?.accessToken) {
        dispatch(fetchTasks({ filters, token: session.accessToken }));
    }
    return () => {
        debouncedSearch.cancel();
    };
}, [dispatch, filters, session?.accessToken, debouncedSearch]);